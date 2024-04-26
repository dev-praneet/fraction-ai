import '../../css/faq.css';

export interface IFAQItem {
  title: string;
  description: string;
}

export default function FAQItem({ title, description }: IFAQItem) {
  return (
    <div className="collapse collapse-arrow pb-[2.75rem] rounded-none w-[67.5rem]">
      <input type="checkbox" className="" />
      <div className="collapse-title faq-item-header p-0">{title}</div>
      <div className="collapse-content collapse-content-custom p-0">
        <p
          className="faq-item-description w-[38.75rem] ml-[3.75rem] pt-[1.75rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}

export function FAQItemMobile({ title, description }: IFAQItem) {
  return (
    <div className="faq-item-mobile collapse collapse-arrow pb-[11.282rem] rounded-none w-full">
      <input type="checkbox" className="" />
      <div className="collapse-title faq-item-header p-0">
        <div className="w-[73.333rem] pb-[7.436rem]">
          <span className="text-[5.641rem] leading-[6.667rem]">{title}</span>
        </div>
      </div>
      <div className="collapse-content collapse-content-custom p-0 !w-full pt-[4.103rem]">
        <p
          className="faq-item-description !text-[4.615rem] !leading-[6.667rem]"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
