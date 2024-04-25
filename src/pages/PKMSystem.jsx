import React from "react";

const PKMSystem = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Personal Knowledge Management System</h1>
      <p>
        Tyson is interested in the Personal Knowledge Management (PKM) AI system, an AI-powered tool designed to function as a comprehensive personal knowledge management system or a "second brain." It helps in capturing, organizing, recalling, and applying information from various sources like books, articles, podcasts, videos, and personal conversations. The system features detailed functionalities for:
        <ol>
          <li>
            <strong>Information Capture:</strong> Capture data from multiple sources. Sub-functions include receiving inputs via API (text, audio, video), transcribing audio and video to text, and summarizing text to extract key points. Tools/Technologies: Google Speech API, spaCy for summarization.
          </li>
          <li>
            <strong>Information Organization:</strong> Organize and store captured information effectively. Sub-functions include automatically categorizing and tagging incoming data, and storing data with metadata in a searchable format. Tools/Technologies: TensorFlow for categorization, MongoDB.
          </li>
          <li>
            <strong>Information Retrieval:</strong> Retrieve information on demand. Sub-functions include searching through the database using keywords or queries, and presenting relevant information based on search results. Tools/Technologies: ElasticSearch.
          </li>
          <li>
            <strong>Learning and Growth:</strong> Identify knowledge gaps and suggest learning resources. Sub-functions include analyzing stored data to identify what’s missing or under-represented, and recommending external resources (e.g., articles, videos) to fill gaps. Tools/Technologies: Custom algorithms for analysis.
          </li>
          <li>
            <strong>External Integration:</strong> Integrate with external apps and platforms. Sub-functions include syncing with external APIs (e.g., social media, calendars), and updating knowledge base in real-time with new information from integrated services. Tools/Technologies: MuleSoft, Zapier.
          </li>
          <li>
            <strong>Security and Privacy:</strong> Ensure data security and user privacy. Sub-functions include encrypting data at rest and in transit, and implementing access control mechanisms. Tools/Technologies: AES, SSL/TLS, JWT.
          </li>
          <li>
            <strong>System Maintenance:</strong> Maintain system integrity and up-to-date operation. Sub-functions include regularly updating system components and security features, and monitoring system performance and troubleshooting issues. Tools/Technologies: Automated monitoring tools.
          </li>
          <li>
            <strong>Documentation and User Support:</strong> Provide comprehensive documentation and support for system users. Sub-functions include documenting API usage and functionalities (Swagger), and offering support for system implementation and troubleshooting. Tools/Technologies: Swagger UI, helpdesk software.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default PKMSystem;
