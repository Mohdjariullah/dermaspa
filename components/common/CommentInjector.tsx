"use client";
import { useEffect } from "react";

export default function CommentInjector() {
  useEffect(() => {
    const comment = document.createComment(`\n=================================================================\nBuilt by AIdaptics - We turn Complex ideas into effortless solutions.\nWebsite: https://aidaptics.com\nInstagram: @aidaptics\nDiscord: https://discord.gg/aidaptics\nTwitter: @aidaptics\n=================================================================\n`);
    document.body.insertBefore(comment, document.body.firstChild);
  }, []);
  return null;
} 