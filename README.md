# Badminton Club Management System — showcase website

这是羽毛球俱乐部管理系统的公开展示网站，与需要登录的实际系统分开。展示页使用 Next.js，包含项目介绍、三张项目画面和技术说明。会员活动画面是根据系统设计制作的示意图，额外活动为样例内容；其他两张是实际系统截图。

## 本地运行

需要 Node.js 20 或以上。

```bash
npm ci
npm run dev
```

打开 `http://localhost:3000`。正式构建运行 `npm run build`，静态网页会输出到 `out/`。

## 推荐：部署到自己的 Vercel

1. 解压此文件夹，确认 `package.json` 位于文件夹最外层。
2. 在你的 GitHub 账号建立一个新的空 repository，例如 `badminton-club-showcase`。这个展示页与原本的管理系统是两个独立项目。
3. 在本文件夹运行以下命令，把源码上传到新 repository（将 `<你的账号>` 换成自己的 GitHub 用户名）：

```bash
git init
git add .
git commit -m "Add badminton club showcase"
git branch -M main
git remote add origin https://github.com/<你的账号>/badminton-club-showcase.git
git push -u origin main
```

4. 登录 Vercel，选择 **Add New → Project → Import Git Repository**，选择刚创建的 repository。
5. Framework Preset 使用 **Next.js**；Root Directory 保持项目根目录。此项目无需环境变量，保持默认构建设置并点击 **Deploy**。
6. 成功后获得一个 `*.vercel.app` 地址。要用自己的域名，到该 Vercel 项目的 **Settings → Domains** 添加域名，并按照 Vercel 显示的 DNS 记录在域名注册商处配置。DNS 值请以 Vercel 当时显示的为准。

以后修改内容并推送到 GitHub，Vercel 会自动重新部署。你可以先把新的 Vercel 地址放进简历；有个人域名时再改成例如 `badminton.你的域名`。

## 不经过 GitHub 的方法

在项目文件夹运行 `npx vercel`，跟随提示登录和建立项目；确认预览正常后运行 `npx vercel --prod`。若希望长期维护和展示源码，仍建议使用 GitHub 连接 Vercel。

## 修改内容

- 文字和三张画面切换：`src/app/showcase.tsx`
- 样式：`src/styles/index.css`
- 图片：`public/showcase/`
- 页面标题和搜索摘要：`src/app/layout.tsx`
- 实际系统链接目前指向 `https://badminton-club-liewww.vercel.app/`。

## 模板来源

此站以 MIT 许可的 [Startup Next.js template](https://github.com/NextJSTemplates/startup-nextjs) 为项目起点，页面内容、视觉设计和截图已针对 Sean Liew 的羽毛球项目重做。原模板许可见 `LICENSE`。
