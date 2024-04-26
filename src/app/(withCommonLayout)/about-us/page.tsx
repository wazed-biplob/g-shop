const AboutUsPage = () => {
  return (
    <div className="font-sans container mx-auto px-4 py-8">
      <p className="text-lg leading-relaxed mb-8">
        Welcome to Ocean&apos;s Bounty, your one-stop destination for fresh,
        organic, and sustainably sourced groceries. At Ocean&apos;s Bounty, we
        believe in providing our customers with the finest selection of products
        from the bounties of the sea and the earth.
      </p>

      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg leading-relaxed mb-8">
        Our mission is to promote healthy living and environmental
        sustainability by offering a diverse range of high-quality groceries
        that are sourced responsibly. We strive to support local producers and
        fishermen while ensuring that our products meet the highest standards of
        freshness and quality.
      </p>

      <h2 className="text-2xl font-bold mb-4">Our Values</h2>
      <ul className="list-disc ml-6 mb-8">
        <li className="text-lg leading-relaxed">
          <strong>Quality:</strong> We are committed to providing our customers
          with only the freshest and highest quality products.
        </li>
        <li className="text-lg leading-relaxed">
          <strong>Sustainability:</strong> We prioritize sustainability in
          everything we do, from sourcing our products to minimizing waste.
        </li>
        <li className="text-lg leading-relaxed">
          <strong>Community:</strong> We value our community and aim to foster
          strong relationships with our customers, producers, and partners.
        </li>
        <li className="text-lg leading-relaxed">
          <strong>Innovation:</strong> We continuously strive to innovate and
          improve our offerings to better serve our customers and the
          environment.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg leading-relaxed mb-8">
        If you have any questions, feedback, or inquiries, please don&apos;t
        hesitate to{" "}
        <a href="/contact-us" className="text-blue-500 hover:underline">
          contact us
        </a>
        . We&apos;d love to hear from you!
      </p>
    </div>
  );
};

export default AboutUsPage;
