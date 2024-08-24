const processPayment = async (paymentData) => {
    const response = await fetch("/api/payment", {
      method: "POST",
      body: JSON.stringify(paymentData),
      headers: { "Content-Type": "application/json" }
    });
    const result = await response.json();
    handlePaymentResponse(result);
  };
  