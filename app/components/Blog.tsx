import BlogOne from '../../public/icons/BlogOne.svg';
import BlogTwo from '../../public/icons/BlogTwo.svg';
import BlogThree from '../../public/icons/BlogThree.svg';
import BlogFour from '../../public/icons/BlogFour.svg';
import ReadItArrow from '../../public/icons/ReadItArrow.svg';
import BlogLeftCurve from '../../public/icons/BlogLeftCurve.svg';
import BlogRightCurve from '../../public/icons/BlogRightCurve.svg';
import '../css/blog.css';

export default function Blog() {
  let BlogIcons = [
    {
      icon: BlogOne,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
    {
      icon: BlogTwo,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
    {
      icon: BlogThree,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
    {
      icon: BlogFour,
      text: 'At Dreamscape, we are stewards of both creativity and capital Our goal is to (re)develop residential, retail.',
    },
  ];
  return (
    <>
      <div>
        <div className="relative h-[8rem] w-full">
          <div className="pl-[13.75rem] pt-[3rem] blog-header">Blog</div>
          <div className="absolute top-0 left-[77.25rem]">
            <div className="relative transparent-bg-parent w-[9rem] h-[9rem]">
              <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0"></div>
              <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
                <span className="circle-button-content">More news</span>
              </div>
            </div>
          </div>

          <div className="absolute top-[6.75rem] left-[3rem]">
            <figure className="">
              <img
                alt={`Blog Left Curve`}
                loading="lazy"
                decoding="async"
                src={BlogLeftCurve.src}
                className="w-[9.5625rem] h-[28.5625rem]"
              />
            </figure>
          </div>
          <div className="absolute top-[6.75rem] right-[3rem]">
            <figure className="">
              <img
                alt={`Blog Right Curve`}
                loading="lazy"
                decoding="async"
                src={BlogRightCurve.src}
                className="w-[9.5625rem] h-[28.5625rem]"
              />
            </figure>
          </div>
        </div>

        <div className="flex justify-between px-[11.25rem]">
          {BlogIcons.map((image, index) => (
            <div key={index} className="">
              <figure className="">
                <img
                  alt={`Slide ${index}`}
                  loading="lazy"
                  decoding="async"
                  src={image.icon.src}
                  className="w-[18.375rem] h-[18.375rem]"
                />
              </figure>

              <div className="pt-[1.25rem] w-[16.875rem]">
                <div className="blog-card-text">
                  <span className="">{image.text}</span>
                </div>
                <div className="pt-[1.75rem] flex">
                  <div className="blog-readme-text">
                    <span>Read it</span>
                  </div>
                  <figure className="pl-[0.375rem]">
                    <img
                      alt={`Arrow`}
                      loading="lazy"
                      decoding="async"
                      src={ReadItArrow.src}
                      className="w-[1rem] h-[1rem]"
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
