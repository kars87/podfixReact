const plans = [
  { name: 'Basic Plan', price: '$9.99' },
  { name: 'Pro Plan', price: '$9.99' },
  { name: 'Studio Plan', price: '$9.99' },
];

export default function Pricing() {
  const handleGetStarted = (planName) => {
    window.dispatchEvent(
      new CustomEvent('open-login', { detail: { mode: 'signup', plan: planName } })
    );
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <h2 className="mt-20 text-3xl font-bold text-center mb-8">Pricing Plans</h2>
      <div className="mt-20 max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white/10 p-6 rounded-lg shadow-lg border border-white/5">
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">
              {plan.price}<span className="text-lg font-normal">/month</span>
            </p>
            <ul className="mb-6">
              <li className="mb-2">✓ Feature one</li>
              <li className="mb-2">✓ Feature two</li>
              <li className="mb-2">✓ Feature three</li>
            </ul>
            <button
              onClick={() => handleGetStarted(plan.name)}
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-lg mb-8 text-white/70">
          Join thousands of podcasters who trust podfix to grow their audience.
        </p>
      </div>
    </section>
  );
}
