import FAQItem, { IFAQItem } from './sub-components/faqItem';
import FooterBgNew from '../../public/icons/FooterBgNew.svg';
import collapseDropdownIcon from '../../public/icons/collapseDropdownIcon.svg';

import '../css/faq.css';

const dataItems: IFAQItem[] = [
  {
    title: 'What does Fraction Al provide?',
    description:
      'We provide you domain specialized labelled data for all steps of training AI models. Be it image, text, audio, video, we do it all. We create tailored data collection pipelines highly optimized for your usecases and all our data is created by humans to prevent any biases',
  },
  {
    title: 'What types of datasets are available on the platform?',
    description:
      'Our offerings encompass various data formats, including text, images, audio, and video for all kinds of AI applications. We also do tailored solutions based on your specific requirements',
  },
  {
    title: 'How do you bring down data costs?',
    description: `1. We source data through our decentralized marketplace to ensure optimal free market prices.<br />
    2. Our community actively enriches a collective data repository, spanning numerous domains. This data's versatility in serving multiple firms leads to significant cost reduction.
    `,
  },
  {
    title: 'What if I want a dataset exclusively for myself?',
    description:
      'Sure thing! We have a private data offering where we can create jobs on our platform based on your requirements and our community will work on it. You can also choose to keep the data private to you.',
  },
  {
    title: 'How does Blockchain come into the picture?',
    description: `Well there are several reasons for that:<br />
    1. Transparency: Using blockchain allows us to keep entire data generation process in public domain and ensure that the generated data is of the highest quality<br />
    2. Global Participation: Since anyone from anywhere can participate in the data generation process, we're able to get a diverse set of data points. Otherwise a lot of time and effort goes into vendor contracts and there are myriad of regulatory issues across countries<br />
    3. Quality Professionals: Blochchain as a technology attracts a great number of quality professionals and we're able to leverage that for reaching out to the best talent across domains for data generation process`,
  },
  {
    title: 'What sets Fraction AI apart from other data providers?',
    description:
      'Fraction AI attains unmatched data quality by adding immutable verification proofs on chain for each dataset. When combined with our global workforce, this approach yields large-scale, high-quality datasets tailored for AI applications.',
  },
  {
    title: 'How do I get started with sourcing data?',
    description: "Great to see your interest! Just book a demo, get on a call with us and we'll handle the rest!",
  },
];

export default function FAQ() {
  return (
    <div className="flex pt-[16.9375rem]">
      <div className="pl-[10.9375rem] faq-header">
        <span>FAQ</span>
      </div>
      <div className="pl-[9.5625rem]">
        <div className="">
          {dataItems.map((item, index) => {
            return <FAQItem key={index} title={item.title} description={item.description} />;
          })}
        </div>
      </div>
    </div>
  );
}
