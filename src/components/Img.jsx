import { img, handleImgError } from '../data/images';

export default function Img({ name, alt, className = '', loading = 'lazy' }) {
  const { src } = img(name);
  return (
    <img
      src={src}
      data-name={name}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleImgError}
    />
  );
}
