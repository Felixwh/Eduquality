import ArrowDropwdown from "./images/ArrowDropdown";

interface Props {
  title: string;
  text: any;
}

const FAQNode = (props: Props) => {
  return (
    <div
      className="relative w-full border-b-[1px] border-black px-2 md:px-4 overflow-hidden mt-14 duration-300 h-[60px] md:h-[50px]"
      ref={(node) => {
        if (!node) return;
        node.onclick = () => {
          if (node.classList.contains("active")) {
            node.children[0].children[1].classList.remove("faq-arrow");
            node.children[1].classList.remove("faq-text");
            node.classList.remove("active");
          } else {
            node.children[0].children[1].classList.add("faq-arrow");
            node.children[1].classList.add("faq-text");
            node.classList.add("active");
          }
        };
      }}
    >
      <div className="relative flex bg-white pb-4 z-10">
        <p className="md:text-2xl">{props.title}</p>
        <div className="absolute right-0 w-[20px] md:w-[26px] md:h-[15px] mr-2 md:mr-4 duration-300 mt-1 md:mt-0">
          <ArrowDropwdown />
        </div>
      </div>
      <p className="relative pb-10 max-w-[1000px] z-0 duration-300">
        {props.text}
      </p>
    </div>
  );
};

export default FAQNode;
