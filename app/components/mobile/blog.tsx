import BlogOne from '../../../public/icons/BlogOne.svg';
import BlogTwo from '../../../public/icons/BlogTwo.svg';
import BlogThree from '../../../public/icons/BlogThree.svg';
import BlogFour from '../../../public/icons/BlogFour.svg';
import ReadItArrow from '../../../public/icons/ReadItArrow.svg';
import BlogBackgroundMobile from '../../../public/icons/BlogBackgroundMobile.svg';
import '../../css/blog.css';

export default function BlogMobile() {
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
      <div className="relative mt-[38.974rem] h-[507.436rem]">
        <figure className="absolute bottom-0">
          <img
            alt={`Blog Left Curve`}
            loading="lazy"
            decoding="async"
            src={BlogBackgroundMobile.src}
            className="w-full h-[462.308rem]"
          />
        </figure>

        <div className="w-full">
          <div className="flex justify-center featured-datasets-header !text-[10.256rem] !leading-[100%]">Blog</div>
        </div>

        <div className="absolute top-[17.436rem] flex justify-center w-full">
          <div className="relative transparent-bg-parent w-[36.923rem] h-[36.923rem]">
            <div className="absolute flex justify-center items-center w-full h-full circle-button transparent-bg top-0 left-0 z-0"></div>
            <div className="absolute flex justify-center items-center w-full h-full top-0 left-0 z-1">
              <span className="circle-button-content !text-[4.615rem]">More news</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between w-full mt-[40rem] h-[457.179rem]">
          {BlogIcons.map((image, index) => (
            <div key={index} className="">
              <figure className="">
                <img
                  alt={`Slide ${index}`}
                  loading="lazy"
                  decoding="async"
                  src={image.icon.src}
                  className="w-[75.385rem] h-[75.385rem]"
                />
              </figure>

              <div className="pt-[5.128rem] pl-[3.077rem]">
                <div className="blog-card-text w-[69.231rem]">
                  <span className="text-[4.103rem] leading-[6.667rem]">{image.text}</span>
                </div>
                <div className="pt-[5.641rem] flex">
                  <div className="blog-readme-text">
                    <span className="text-[3.59rem] leading-[4.103rem]">Read it</span>
                  </div>
                  <figure className="pl-[1.538rem]">
                    <img
                      alt={`Arrow`}
                      loading="lazy"
                      decoding="async"
                      src={ReadItArrow.src}
                      className="w-[4.103rem] h-[4.103rem]"
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
