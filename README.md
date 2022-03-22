# monorepo-demo

### what

[Monorepo Explained](https://monorepo.tools/)

### 初始化

- 创建项目

```bash
mkdir monorepo-demo
```

- 创建 package.json

```shell
pnpm init -y
```

- 创建 pnpm-workspace.yaml

```bash
packages:
  - 'packages/*'
```

- 创建子包

```bash
mkdir packages
cd packages
mkdir web
mkdir server
```

- 创建子包 package.json

```bash
cd web
pnpm init -y
cd server
pnpm init -y
```

- 修改包的名称

```json
{
  "name": "@linyx/monorepo-demo-web"
}
{
  "name": "@linyx/monorepo-demo-server"
}
```

### 安装全局依赖

```shell
pnpm install typescript -w -D
```

`-W` 表示在根目录安装依赖

### 安装局部依赖

```shell
pnpm install axios --filter @linyx/monorepo-demo-web
pnpm install express --filter @linyx/monorepo-demo-server
```

`--filter`用于安装子包的依赖

### 安装项目内互相依赖

```shell
pnpm intall @linyx/monorepo-demo-utils --filter @linyx/monorepo-demo-web
```

`@*`通配符更新版本
