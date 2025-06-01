'use client';

import dynamic from 'next/dynamic';
import { useEffect, useId, useState } from 'react';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

type MarkdownEditorProps = {
  labelText?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  textAreaName: string;
  disabled?: boolean;
};

export function MarkdownEditor({ labelText = '', value, setValue, textAreaName, disabled = false }: MarkdownEditorProps) {
  const id = useId();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const htmlClass = document.documentElement.classList;
    if (htmlClass.contains("dark")) setTheme("dark");
    else setTheme("light");

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='flex flex-col gap-2'>
      {labelText && (
        <label className='text-sm' htmlFor={id}>
          {labelText}
        </label>
      )}

      <MDEditor
        data-color-mode={theme}
        className='whitespace-pre-wrap'
        value={value}
        onChange={value => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        extraCommands={[]}
        preview='edit'
        hideToolbar={disabled}
        textareaProps={{
          id,
          name: textAreaName,
          disabled: disabled,
          className: 'bg-accent h-full'
        }}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
      />
    </div>
  );
}