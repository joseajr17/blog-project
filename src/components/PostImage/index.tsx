import Link from "next/link";
import Image from "next/image";

type PostImageProps = {
  imageProps: React.ComponentProps<typeof Image>,
  linkProps: React.ComponentProps<typeof Link>,
}

export function PostImage({ imageProps, linkProps }: PostImageProps) {
  return (
    <Link {...linkProps} className={`w-full h-full overflow-hidden rounded-xl ${linkProps.className}`}>
      <Image {...imageProps} alt={imageProps.alt}
        className={`w-full h-full object-cover object-center group-hover:scale-105 transition ${imageProps.className}`}
      />
    </Link>
  );
}