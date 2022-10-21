import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { faqs } from "data/faq";
import Link from "next/link";

const FAQComponent = () => {
  const [faqSelected, setFaqSelected] = useState({ index: 0, toggled: true });
  const toggleFaq = (index) => {
    if (index === faqSelected.index) {
      setFaqSelected({ index, toggled: !faqSelected.toggled });
    } else {
      setFaqSelected({ index, toggled: true });
    }
  };
  const formatLinkedTexts = (text, links) => {
    let memText = "";
    let memLink = "";
    let a = "",
      b = "",
      count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "@") {
        if (a === "@") a = "@@";
        else if (a === "") a = "@";
      }

      if (text[i] === "$") {
        if (b === "$") b = "$$";
        else if (b === "") b = "$";
      }

      if (a === "@@" && b === "" && text[i] !== "@") {
        memLink += text[i];
      }

      if (a.length < 1 && b.length < 1) {
        memText += text[i];
      }

      if (b === "$$") {
        a = "";
        b = "";
        memText += "<a href='" + links[count] + "'>" + memLink + "</a>";
        count = count + 1;
        memLink = "";
      }
    }
    return memText;
  };
  return (
    <div className="w-[100%] px-[5%] mt-[150px] max640:mt-[120px] relative flex flex-col items-center justify-center mb-[150px]">
      <h1 className="text-4xl bmd:3xl mb-10 font-semibold text-center amd:mt-[50px] amd:mb-[70px] text-[#0b508f] leading-[44px]">
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => {
        return (
          <div
            className="flex flex-col w-[720px] bmd:w-[100%] gap-5 shadow-[0px_5px_16px_rgba(8,15,52,0.06)] rounded-[18px] mb-10 p-5 max400:p-4"
            key={index}
          >
            <div
              className="flex w-[100%] justify-between cursor-pointer gap-3 items-center"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="flex-1 text-2xl max640:text-xl">{faq.question}</h3>
              <span className="p-3 bg-[#0b508f] text-white rounded-[50px]">
                <Icon icon="akar-icons:chevron-down" />
              </span>
            </div>
            {index === faqSelected.index && faqSelected.toggled && (
              <div>
                {faq.answer.length > 0 && (
                  <p
                    className="text-base text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: faq.hasLink
                        ? formatLinkedTexts(faq.answer, faq.links)
                        : faq.answer,
                    }}
                  ></p>
                )}
                {faq.hasList ? (
                  <ul className="list-disc p-5 max400:p-4 text-base text-gray-600">
                    {faq.lists.map((list, i) => {
                      return (
                        <li
                          key={i}
                          dangerouslySetInnerHTML={{
                            __html: faq.hasLink
                              ? formatLinkedTexts(list, faq.links)
                              : list,
                          }}
                        ></li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default FAQComponent;
