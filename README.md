# 个人作品集

## 项目简介
这是一个基于 Next.js 开发的个人作品集网站，集成了作品展示、博客文章、个人简历等功能。支持用户管理和内容管理，采用响应式设计，确保在各种设备上都能获得良好的浏览体验。

## 技术栈
- **前端框架**：Next.js 14 (App Router)
- **ORM 框架**: Prisma 6.4
- **动画 框架**: frame-motion 12.4.7
- **UI 框架**：Tailwind CSS
- **数据库** postgres
- **缓存**：Redis 7.0
- **认证**：NextAuth.js
- **状态管理**：Zustand (在学习中)

## 功能模块

### 1. 作品展示页面 (首页)
- 网格布局展示项目作品
- 每个作品包含：
  - 项目封面图
  - 项目名称
  - 简短描述
  - 使用的技术栈标签
  - 项目链接（Demo/源码）

### 2. 博客页面
- 文章列表展示
  - 文章标题
  - 发布日期
  - 阅读时间
  - 文章摘要
  - 标签分类
- 支持按分类筛选文章
- 支持文章搜索
- Markdown 渲染
- 代码高亮
- 评论功能
- 文章目录导航

### 3. 简历展示页面
- 个人基本信息
- 专业技能
- 工作经历
- 项目经验
- 教育背景
- 获奖证书
- 支持简历导出 PDF
- 响应式布局适配

### 4. 用户管理页面
#### 普通用户功能
- 个人信息管理
  - 修改头像
  - 修改昵称
  - 修改密码
  - 绑定邮箱
- 评论管理
- 收藏管理

#### 管理员功能
- 用户管理
  - 用户列表
  - 封禁/解封用户
  - 删除用户
- 内容管理
  - 作品管理（CRUD）
  - 博客管理（CRUD）
  - 博客编写
  - 简历管理（CRUD）
  - 页面管理（新增/编辑页面）
- 系统设置
  - 网站信息配置
  - 主题设置
  - 导航菜单配置

### 5. 公共功能
- 用户认证
  - 游客默认访问
  - 邮箱密码登录
  - 第三方登录（GitHub、Google）
  - JWT 认证
- 响应式设计
  - 移动端适配
  - 平板适配
  - 桌面端适配
- 主题切换
  - 明暗主题
  - 主题色定制
- 权限控制
  - 基于角色的权限系统
  - 细粒度的操作权限控制

## 终极目标

搭建一个可以展示自己作品以及能力的网站，并且可以作为新鲜技术(agent)的试验基地，及具有可扩展性