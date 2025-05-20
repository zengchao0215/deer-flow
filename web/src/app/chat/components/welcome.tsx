// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { motion } from "framer-motion";

import { cn } from "~/lib/utils";

export function Welcome({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("flex flex-col", className)}
      style={{ transition: "all 0.2s ease-out" }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <h3 className="mb-2 text-center text-3xl font-medium">
        👋 你好，AI世界！
      </h3>
      <div className="text-muted-foreground px-4 text-center text-lg">
        欢迎来到🦌 DeerFlow是一款基于尖端语言模型的深度研究助手，可帮助您在网络上搜索、浏览信息和处理复杂任务。
      </div>
    </motion.div>
  );
}
