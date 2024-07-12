import Image from 'next/image';

const Section = ({ div1Style, div2Style, titleStyle, title, descStyle, description, image }) => {
  return (
    <div className={div1Style}>
      <div className={div2Style}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={descStyle}>{description}</p>
      </div>
      <Image
        alt={image.alt}
        src={image.src}
        width={image.width}
        height={image.height}
      />
    </div>
  );
};

export default Section;
