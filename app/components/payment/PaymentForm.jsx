const PaymentForm = ({ checkin, checkout }) => {
  return (
    <form className="my-8">
      <div className="my-4 space-y-2">
        <label htmlhtmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlhtmlFor="email" className="block">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <span>Check in</span>
        <h4 className="mt-2">
          <input value={checkin} type="date" name="checkin" id="checkin" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <span>Checkout</span>
        <h4 className="mt-2">
          <input value={checkout} type="date" name="checkout" id="checkout" />
        </h4>
      </div>

      <div className="my-4 space-y-2">
        <label htmlhtmlFor="card" className="block">
          Card Number
        </label>
        <input
          type="text"
          id="card"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlhtmlFor="expiry" className="block">
          Expiry Date
        </label>
        <input
          type="text"
          id="expiry"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <div className="my-4 space-y-2">
        <label htmlhtmlFor="cvv" className="block">
          CVV
        </label>
        <input
          type="text"
          id="cvv"
          className="w-full border border-[#CCCCCC]/60 py-1 px-2 rounded-md"
        />
      </div>

      <button type="submit" className="w-full btn-primary">
        Pay Now ($10)
      </button>
    </form>
  );
};

export default PaymentForm;
