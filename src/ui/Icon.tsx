interface IconProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function Icon({ src, alt = 'icon', className = '' }: IconProps) {
  return <img loading='lazy' className={className} src={src} alt={alt} />;
}
