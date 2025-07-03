import { useState } from "react";

const ButtonTabBorder = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      label: "History",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
      label: "Approach",
      content:
        "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
      label: "Culture",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.",
    },
    {
      label: "Method",
      content:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Tab buttons */}
      <div className="flex bg-white mb-4 border-b-2 border-b-gray-200 relative px-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 px-4 pt-3 pb-[calc(0.75rem+2px)] font-medium text-sm
        relative z-10
        ${
          activeTab === index
            ? "border-b-2 border-[#47B475] text-[#47B475] -mb-[2px] bg-white"
            : "text-gray-600 hover:text-gray-800"
        }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-white p-6 min-h-32">
        {/* <h3 className="text-xl font-semibold mb-3 text-gray-800">
          {tabs[activeTab].label}
        </h3> */}
        <p className="text-gray-600 leading-relaxed text-center">
          {tabs[activeTab].content}
        </p>
      </div>
    </div>
  );
};

export default ButtonTabBorder;
