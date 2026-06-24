export type Section = { heading: string; body: string[] };
export type Doc = { title: string; updated: string; intro: string; sections: Section[] };
export type Bilingual = { en: Doc; zh: Doc };

export const SUPPORT_EMAIL = "reubensun728@gmail.com";

export const privacy: Bilingual = {
  en: {
    title: "Privacy Policy",
    updated: "Last updated: June 24, 2026",
    intro:
      "StepCamera (“the app”, “we”) is an AI camera app. This policy explains what we collect, how we use it, and the choices you have. We collect only what the app needs to work, and we do not sell your data or use it for third-party advertising.",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "Account information: when you create an account we collect your email address and display name. Your password is sent over an encrypted connection and stored only in hashed form on our servers.",
          "Photos and images: when you use the AI features (AI crop and Master Mode), the photo you capture is uploaded to our service for processing. Photos you take with the plain shutter are stored only on your device unless you export them.",
          "Device information: a per-vendor device identifier and basic diagnostics used to operate the service and prevent abuse.",
          "On-device processing: face detection runs locally on your device using Apple’s Vision framework. Only the resulting face rectangles (not facial-recognition data) are sent with an AI request.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "To provide the app’s features — authenticating your account, generating AI composition suggestions, and returning preview images.",
          "To operate, secure, and improve the service.",
          "To train and improve our AI models. Images you submit through the AI features may be used to develop and improve our models. We do not use them for advertising and we do not sell them.",
        ],
      },
      {
        heading: "Sharing",
        body: [
          "We do not sell your personal data and we do not share it with third parties for their own advertising.",
          "We use service providers (for example, model-inference providers) strictly to process your requests on our behalf and under confidentiality obligations.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "Account data is kept while your account is active. Images submitted to the AI service are retained to provide and improve the features; you can request deletion at any time.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can request access to or deletion of your account and associated data by contacting us at " +
            SUPPORT_EMAIL +
            ".",
          "You control camera and Photos permissions in the iOS Settings app.",
        ],
      },
      {
        heading: "Security",
        body: [
          "Data is transmitted over standard encrypted (HTTPS/TLS) connections. No method of transmission or storage is completely secure, but we take reasonable measures to protect your information.",
        ],
      },
      {
        heading: "Children",
        body: ["StepCamera is not directed to children under 13, and we do not knowingly collect their data."],
      },
      {
        heading: "Changes",
        body: ["We may update this policy; material changes will be reflected here with a new “last updated” date."],
      },
      {
        heading: "Contact",
        body: ["Questions about this policy: " + SUPPORT_EMAIL + "."],
      },
    ],
  },
  zh: {
    title: "隐私政策",
    updated: "最后更新：2026 年 6 月 24 日",
    intro:
      "StepCamera（“本应用”“我们”）是一款 AI 相机应用。本政策说明我们收集哪些信息、如何使用，以及你拥有的选择。我们仅收集应用运行所必需的信息，不会出售你的数据，也不用于第三方广告。",
    sections: [
      {
        heading: "我们收集的信息",
        body: [
          "账号信息：创建账号时，我们会收集你的邮箱和显示名称。密码通过加密连接传输，并仅以哈希形式存储在我们的服务器上。",
          "照片与图像：使用 AI 功能（AI 构图与大师模式）时，你拍摄的照片会上传至我们的服务进行处理。使用普通快门拍摄的照片仅保存在你的设备上（除非你导出）。",
          "设备信息：用于运营服务和防止滥用的设备标识符及基本诊断信息。",
          "端侧处理：人脸检测使用 Apple Vision 框架在你的设备本地运行。仅有生成的人脸框（而非人脸识别数据）会随 AI 请求一同发送。",
        ],
      },
      {
        heading: "我们如何使用信息",
        body: [
          "提供应用功能——验证账号、生成 AI 构图建议并返回预览图。",
          "运营、保护和改进服务。",
          "训练和改进我们的 AI 模型。你通过 AI 功能提交的图像可能被用于开发和改进我们的模型。我们不会将其用于广告，也不会出售。",
        ],
      },
      {
        heading: "共享",
        body: [
          "我们不会出售你的个人数据，也不会为第三方的广告目的共享。",
          "我们会使用服务提供商（例如模型推理提供商），仅为代表我们处理你的请求，并受保密义务约束。",
        ],
      },
      {
        heading: "数据保留",
        body: [
          "账号数据在账号有效期间保留。提交给 AI 服务的图像会被保留以提供和改进功能；你可随时请求删除。",
        ],
      },
      {
        heading: "你的选择",
        body: [
          "你可通过 " + SUPPORT_EMAIL + " 联系我们，请求访问或删除你的账号及相关数据。",
          "你可在 iOS 设置中管理相机与照片权限。",
        ],
      },
      {
        heading: "安全",
        body: [
          "数据通过标准加密（HTTPS/TLS）连接传输。没有任何传输或存储方式是绝对安全的，但我们会采取合理措施保护你的信息。",
        ],
      },
      {
        heading: "儿童",
        body: ["StepCamera 不面向 13 岁以下儿童，我们不会有意收集他们的数据。"],
      },
      {
        heading: "变更",
        body: ["我们可能会更新本政策；重大变更将在此处以新的“最后更新”日期体现。"],
      },
      {
        heading: "联系我们",
        body: ["关于本政策的问题：" + SUPPORT_EMAIL + "。"],
      },
    ],
  },
};

export const support: Bilingual = {
  en: {
    title: "Support",
    updated: "",
    intro: "Need help with StepCamera? We’re happy to help.",
    sections: [
      {
        heading: "Contact us",
        body: [
          "Email " + SUPPORT_EMAIL + " and we’ll get back to you, usually within a couple of business days. Please include your device model and iOS version.",
        ],
      },
      {
        heading: "Frequently asked questions",
        body: [
          "Account: you can sign up with an email and verification code. To delete your account and data, email us from the address on your account.",
          "AI features: “Quick” suggests a crop and recomposes your shot; “Master” gives composition guidance and a preview image — you then frame the shot and press the shutter yourself.",
          "Telephoto: on supported devices, far AI shots use the real telephoto lens for better quality.",
          "Photos & privacy: photos you take with AI features are uploaded for processing and may be used to improve our models. See the Privacy Policy for details.",
        ],
      },
      {
        heading: "Report a problem",
        body: ["Found a bug or have a feature request? Email " + SUPPORT_EMAIL + " with steps to reproduce and screenshots if possible."],
      },
    ],
  },
  zh: {
    title: "支持",
    updated: "",
    intro: "使用 StepCamera 需要帮助？我们很乐意为你提供协助。",
    sections: [
      {
        heading: "联系我们",
        body: [
          "发邮件至 " + SUPPORT_EMAIL + "，我们通常会在两个工作日内回复。请附上你的设备型号和 iOS 版本。",
        ],
      },
      {
        heading: "常见问题",
        body: [
          "账号：可使用邮箱和验证码注册。如需删除账号及数据，请使用账号邮箱发信给我们。",
          "AI 功能：“快速”会建议裁剪并重新构图；“大师”提供构图指导和预览图——由你自己构图并按下快门拍摄。",
          "长焦：在支持的设备上，远景 AI 拍摄会使用真正的长焦镜头以获得更好画质。",
          "照片与隐私：使用 AI 功能拍摄的照片会上传处理，并可能用于改进我们的模型。详见隐私政策。",
        ],
      },
      {
        heading: "反馈问题",
        body: ["发现问题或有功能建议？请发邮件至 " + SUPPORT_EMAIL + "，并附上复现步骤和截图（如有）。"],
      },
    ],
  },
};
