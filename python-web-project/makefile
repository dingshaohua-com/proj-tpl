.PHONY: 启动 或 构建项目

# 默认显示帮助
help:
	@echo "可用命令："
	@echo "  make dev      - 同时启动前端(vite)和后端(python)"
	@echo "  make install  - 安装前后端依赖"
	@echo "  make kill     - 强制关闭 5173(vite) 和 8000(fastapi) 端口"
	@echo "  make clean    - 清理构建产物"
	@echo "  make build    - 生产构建（前端打包到后端static目录）"

# 检测操作系统（用于处理 Windows 差异）
UNAME_S := $(shell uname -s 2>/dev/null || echo "Windows")

# 并行启动前后端（-j 2 表示同时运行两个任务）
dev:
	@echo "🚀 启动开发环境..."
	@make -j 2 frontend backend

# 前端开发服务器（Vite）
frontend:
	cd web && npm run dev

# 后端开发服务器（FastAPI）
backend:
	cd server && source .venv/bin/activate && python -m uvicorn server.app:server --reload --host 0.0.0.0

