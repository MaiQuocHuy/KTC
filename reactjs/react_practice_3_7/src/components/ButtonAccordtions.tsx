import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const ButtonAccordtions = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);
  const accordions = [
    {
      id: 1,
      title: "History",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
      id: 2,
      title: "Approach",
      content:
        "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
      id: 3,
      title: "Culture",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
    },
    {
      id: 4,
      title: "Method",
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    },
  ];

  const [multipleOpenAccordions, setMultipleOpenAccordions] = useState(
    new Set()
  );

  const toggleMultipleAccordion = (id: number) => {
    const newOpenAccordions = new Set(multipleOpenAccordions);
    if (newOpenAccordions.has(id)) {
      newOpenAccordions.delete(id);
    } else {
      newOpenAccordions.add(id);
    }
    setMultipleOpenAccordions(newOpenAccordions);
  };

  const toggleAccordion = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  return (
    <div className="flex flex-col gap-8">
      {/* Single Accorditions */}
      <div>
        <div className="w-full max-w-2xl mx-auto space-y-2">
          {accordions.map((accordion) => (
            <div
              key={accordion.id}
              className={`border border-gray-200 rounded-xs overflow-hidden ${
                openAccordion === accordion.id
                  ? "bg-[#47B475] text-white"
                  : "bg-[#F5F5F5]"
              }`}
            >
              <button
                onClick={() => toggleAccordion(accordion.id)}
                className="w-full px-6 py-4 text-center"
              >
                <span className="font-medium">{accordion.title}</span>
              </button>

              <div
                className={`overflow-hidden ${
                  openAccordion === accordion.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {accordion.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Multiple Accorditions */}
      <div className="w-full max-w-2xl mx-auto space-y-2">
        {accordions.map((accordion) => (
          <div
            key={accordion.id}
            className="border border-gray-200 rounded-xs overflow-hidden "
          >
            <button
              onClick={() => toggleMultipleAccordion(accordion.id)}
              className={`w-full px-6 py-4 text-center flex items-center justify-center ${
                multipleOpenAccordions.has(accordion.id)
                  ? "bg-[#47B475] text-white"
                  : "bg-[#F5F5F5]"
              }`}
            >
              <span className="font-medium">{accordion.title}</span>
            </button>

            <div
              className={`overflow-hidden ${
                multipleOpenAccordions.has(accordion.id)
                  ? "max-h-96"
                  : "max-h-0"
              }`}
            >
              <div className="px-6 py-4 bg-white/70 border-t border-blue-200">
                <p className="text-gray-700 leading-relaxed">
                  {accordion.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonAccordtions;
