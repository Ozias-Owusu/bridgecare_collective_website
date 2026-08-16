const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  VerticalAlign,
} = require("docx");
const fs = require("fs");
const path = require("path");

const blue = "005191";
const green = "4A9B2F";
const lightBlue = "E8F1F8";
const lightGray = "F5F7FA";
const white = "FFFFFF";
const dark = "14202B";
const muted = "5A6570";
const borderColor = "C5D4E0";
const redSoft = "FDECEA";

const thin = { style: BorderStyle.SINGLE, size: 4, color: borderColor };
const borders = { top: thin, bottom: thin, left: thin, right: thin };

function cell(text, opts = {}) {
  const {
    bold = false,
    fill,
    width = 2340,
    color = dark,
    align = AlignmentType.LEFT,
    fontSize = 18,
    italic = false,
  } = opts;
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: fill ? { type: ShadingType.CLEAR, fill } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    children: [
      new Paragraph({
        alignment: align,
        spacing: { before: 60, after: 60 },
        children: [
          new TextRun({
            text: text || "",
            bold,
            italics: italic,
            size: fontSize,
            font: "Calibri",
            color,
          }),
        ],
      }),
    ],
  });
}

function headerCell(text, width) {
  return cell(text, {
    bold: true,
    fill: blue,
    color: white,
    width,
    fontSize: 17,
  });
}

function fieldRow(label, value = "", labelW = 2400, valueW = 6960) {
  return new TableRow({
    children: [
      cell(label, { bold: true, fill: lightBlue, width: labelW, fontSize: 18 }),
      cell(value, {
        width: valueW,
        fontSize: 18,
        italic: !value,
        color: value ? dark : muted,
      }),
    ],
  });
}

function accountSection(title, rows) {
  const colW = [1800, 2200, 2200, 1800, 1360];
  const headers = [
    "Platform / Service",
    "Account name / Email",
    "Username / Handle",
    "Password",
    "Owner / Notes",
  ];
  const tableRows = [
    new TableRow({
      children: headers.map((h, i) => headerCell(h, colW[i])),
    }),
    ...rows.map(
      (r, idx) =>
        new TableRow({
          children: r.map((t, i) =>
            cell(t, {
              width: colW[i],
              fill: idx % 2 === 0 ? white : lightGray,
              fontSize: 17,
              italic: !t || t === "—",
              color: !t || t === "—" ? muted : dark,
            })
          ),
        })
    ),
  ];
  return [
    new Paragraph({
      spacing: { before: 280, after: 120 },
      children: [
        new TextRun({
          text: title,
          bold: true,
          size: 24,
          font: "Calibri",
          color: blue,
        }),
      ],
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: colW,
      rows: tableRows,
    }),
  ];
}

const socialRows = [
  ["Instagram", "", "@", "", ""],
  ["TikTok", "", "@", "", ""],
  ["Facebook Page", "", "", "", ""],
  ["WhatsApp Business / Channel", "", "", "", ""],
  ["YouTube", "", "", "", ""],
  ["X (Twitter)", "", "@", "", ""],
];

const techRows = [
  ["GitHub (website repo)", "", "", "", ""],
  ["Render (website host)", "", "", "", ""],
  ["Domain / DNS registrar", "", "", "", ""],
  ["Google account / Gmail", "", "", "", ""],
  ["Website admin / CMS", "", "", "", ""],
  ["Email hosting / workspace", "", "", "", ""],
];

const designRows = [
  ["Canva", "", "", "", ""],
  ["Adobe Express", "", "", "", ""],
  ["CapCut", "", "", "", ""],
  ["Meta Business Suite", "", "", "", ""],
  ["Other design / tools", "", "", "", ""],
];

const emptyExtra = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const doc = new Document({
  creator: "BridgeCare Collective",
  title: "BridgeCare Collective — Shared Account Access Registry",
  description:
    "Internal shared credentials and account access log for BridgeCare Collective handlers.",
  sections: [
    {
      properties: {
        page: {
          margin: { top: 720, right: 720, bottom: 720, left: 720 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              border: {
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 12,
                  color: blue,
                  space: 8,
                },
              },
              spacing: { after: 120 },
              children: [
                new TextRun({
                  text: "BridgeCare Collective",
                  bold: true,
                  size: 18,
                  font: "Calibri",
                  color: blue,
                }),
                new TextRun({
                  text: "  ·  INTERNAL — Shared Account Access Registry",
                  size: 16,
                  font: "Calibri",
                  color: muted,
                }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              border: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 6,
                  color: borderColor,
                  space: 6,
                },
              },
              alignment: AlignmentType.CENTER,
              spacing: { before: 80 },
              children: [
                new TextRun({
                  text: "Confidential · BridgeCare Collective · Page ",
                  size: 14,
                  font: "Calibri",
                  color: muted,
                }),
                new TextRun({
                  children: [PageNumber.CURRENT],
                  size: 14,
                  font: "Calibri",
                  color: muted,
                }),
                new TextRun({
                  text: " of ",
                  size: 14,
                  font: "Calibri",
                  color: muted,
                }),
                new TextRun({
                  children: [PageNumber.TOTAL_PAGES],
                  size: 14,
                  font: "Calibri",
                  color: muted,
                }),
                new TextRun({
                  text: "  ·  Update this document whenever logins change",
                  size: 14,
                  font: "Calibri",
                  color: muted,
                }),
              ],
            }),
          ],
        }),
      },
      children: [
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: "SHARED ACCOUNT ACCESS REGISTRY",
              bold: true,
              size: 32,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: "Official credentials and access log for BridgeCare Collective digital accounts. All authorised handlers should keep this document current.",
              size: 19,
              font: "Calibri",
              color: muted,
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "1. Document control",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2400, 6960],
          rows: [
            fieldRow(
              "Document title",
              "BridgeCare Collective — Shared Account Access Registry"
            ),
            fieldRow(
              "Classification",
              "INTERNAL / CONFIDENTIAL — do not post publicly"
            ),
            fieldRow("Organisation", "BridgeCare Collective"),
            fieldRow("Version", "1.0"),
            fieldRow("Effective date", ""),
            fieldRow("Last updated", ""),
            fieldRow("Last updated by", ""),
            fieldRow("Next review date", ""),
            fieldRow(
              "Storage location",
              "Private shared drive / secured folder (recommended)"
            ),
          ],
        }),

        new Paragraph({
          spacing: { before: 280, after: 100 },
          children: [
            new TextRun({
              text: "2. Purpose",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "This registry ensures that the three people responsible for BridgeCare Collective digital channels and tools can access every official account if someone is unavailable, locks out, or leaves. It is the single shared source of truth for account names, usernames/handles, passwords, recovery contacts, and ownership notes.",
              size: 19,
              font: "Calibri",
              color: dark,
            }),
          ],
        }),

        new Paragraph({
          spacing: { before: 200, after: 100 },
          children: [
            new TextRun({
              text: "3. Access principles (all handlers)",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        ...[
          "Only authorised BridgeCare handlers listed in Section 4 may hold this document.",
          "Update this file the same day any password, email, phone, or recovery detail changes.",
          "Never share passwords in public chats, comments, or unsecured screenshots.",
          "Prefer unique strong passwords; note 2FA/MFA status in the Notes column.",
          "If an account is compromised, change the password immediately and update every row affected.",
          "Store this Word file in a private, access-controlled location (password-protected file or private shared folder recommended).",
          "Do not email this file to personal inboxes unless encrypted / agreed by the team.",
        ].map(
          (t, i) =>
            new Paragraph({
              spacing: { after: 60 },
              indent: { left: 200 },
              children: [
                new TextRun({
                  text: `${i + 1}.  ${t}`,
                  size: 18,
                  font: "Calibri",
                  color: dark,
                }),
              ],
            })
        ),

        new Paragraph({
          spacing: { before: 280, after: 100 },
          children: [
            new TextRun({
              text: "4. Authorised handlers",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Fill in the three people who must retain shared access. Keep phone and backup email current.",
              size: 18,
              font: "Calibri",
              color: muted,
              italics: true,
            }),
          ],
        }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [800, 2400, 2600, 2000, 1560],
          rows: [
            new TableRow({
              children: [
                headerCell("#", 800),
                headerCell("Full name", 2400),
                headerCell("Email", 2600),
                headerCell("Phone / WhatsApp", 2000),
                headerCell("Role (e.g. Content, Tech)", 1560),
              ],
            }),
            ...[1, 2, 3].map(
              (n, idx) =>
                new TableRow({
                  children: [String(n), "", "", "", ""].map((t, i) =>
                    cell(t, {
                      width: [800, 2400, 2600, 2000, 1560][i],
                      fill: idx % 2 === 0 ? white : lightGray,
                      fontSize: 17,
                    })
                  ),
                })
            ),
          ],
        }),

        new Paragraph({
          spacing: { before: 280, after: 100 },
          children: [
            new TextRun({
              text: "5. Shared recovery contacts",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Use these for password resets and 2FA recovery where possible so no single person is the only recovery path.",
              size: 18,
              font: "Calibri",
              color: muted,
              italics: true,
            }),
          ],
        }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2400, 6960],
          rows: [
            fieldRow("Primary recovery email", ""),
            fieldRow("Secondary recovery email", ""),
            fieldRow("Primary recovery phone", ""),
            fieldRow("Secondary recovery phone", ""),
            fieldRow("Backup authenticator owner", ""),
            fieldRow("Emergency contact person", ""),
          ],
        }),

        new Paragraph({
          spacing: { before: 320, after: 80 },
          children: [
            new TextRun({
              text: "6. Account credentials",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: "Enter exact account name, login email or handle, password, and who primarily manages each account. Add rows as needed. Mark 2FA (Yes/No) in Notes.",
              size: 18,
              font: "Calibri",
              color: muted,
              italics: true,
            }),
          ],
        }),

        ...accountSection("6.1 Social media & channels", socialRows),
        ...accountSection("6.2 Website, code & hosting", techRows),
        ...accountSection("6.3 Design, video & business tools", designRows),
        ...accountSection(
          "6.4 Additional accounts (add as needed)",
          emptyExtra
        ),

        new Paragraph({
          spacing: { before: 320, after: 100 },
          children: [
            new TextRun({
              text: "7. Change log",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Record every password or ownership change for accountability.",
              size: 18,
              font: "Calibri",
              color: muted,
              italics: true,
            }),
          ],
        }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [1400, 1800, 2200, 3960],
          rows: [
            new TableRow({
              children: [
                headerCell("Date", 1400),
                headerCell("Updated by", 1800),
                headerCell("Account(s) changed", 2200),
                headerCell("What changed", 3960),
              ],
            }),
            ...Array.from({ length: 8 }).map(
              (_, idx) =>
                new TableRow({
                  children: ["", "", "", ""].map((t, i) =>
                    cell(t, {
                      width: [1400, 1800, 2200, 3960][i],
                      fill: idx % 2 === 0 ? white : lightGray,
                      fontSize: 17,
                    })
                  ),
                })
            ),
          ],
        }),

        new Paragraph({
          spacing: { before: 320, after: 100 },
          children: [
            new TextRun({
              text: "8. Handler acknowledgment",
              bold: true,
              size: 24,
              font: "Calibri",
              color: blue,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 120 },
          children: [
            new TextRun({
              text: "I confirm I will keep credentials confidential, update this registry when access details change, and only use accounts for BridgeCare Collective work.",
              size: 18,
              font: "Calibri",
              color: dark,
            }),
          ],
        }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [800, 2800, 2200, 1800, 1760],
          rows: [
            new TableRow({
              children: [
                headerCell("#", 800),
                headerCell("Name", 2800),
                headerCell("Signature", 2200),
                headerCell("Date", 1800),
                headerCell("Initials", 1760),
              ],
            }),
            ...[1, 2, 3].map(
              (n, idx) =>
                new TableRow({
                  children: [String(n), "", "", "", ""].map((t, i) =>
                    cell(t, {
                      width: [800, 2800, 2200, 1800, 1760][i],
                      fill: idx % 2 === 0 ? white : lightGray,
                      fontSize: 17,
                    })
                  ),
                })
            ),
          ],
        }),

        new Paragraph({
          spacing: { before: 320, after: 80 },
          children: [
            new TextRun({
              text: "Important notice",
              bold: true,
              size: 20,
              font: "Calibri",
              color: "B71C1C",
            }),
          ],
        }),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [9360],
          rows: [
            new TableRow({
              children: [
                new TableCell({
                  borders,
                  width: { size: 9360, type: WidthType.DXA },
                  shading: { type: ShadingType.CLEAR, fill: redSoft },
                  children: [
                    new Paragraph({
                      spacing: {
                        before: 80,
                        after: 40,
                        left: 100,
                        right: 100,
                      },
                      children: [
                        new TextRun({
                          text: "This document contains sensitive login information. Protect it like cash: store privately, limit copies, password-protect the file if possible, and never publish it on social media, public GitHub, or open chat groups. A password manager (e.g. Bitwarden, 1Password) shared among the three handlers is a stronger long-term option; this Word file is the team’s agreed interim shared register.",
                          size: 17,
                          font: "Calibri",
                          color: dark,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        new Paragraph({
          spacing: { before: 280 },
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: "BridgeCare Collective  ·  Bridging health knowledge & community care",
              size: 16,
              font: "Calibri",
              color: green,
              italics: true,
            }),
          ],
        }),
      ],
    },
  ],
});

const fileName =
  "BridgeCare_Collective_Shared_Account_Access_Registry.docx";
const downloadsPath = path.join("C:\\Users\\ooantwi\\Downloads", fileName);
const projectPath = path.join(
  "C:\\Users\\ooantwi\\bridgecare-collective\\marketing",
  fileName
);

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(downloadsPath, buf);
  fs.writeFileSync(projectPath, buf);
  console.log("Downloads:", downloadsPath);
  console.log("Project:", projectPath);
  console.log("Bytes:", buf.length);
});
