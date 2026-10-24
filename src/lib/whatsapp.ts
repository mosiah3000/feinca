export function whatsappLink(phone: string, message?: string): string {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productQuoteLink(phone: string, productName: string): string {
  return whatsappLink(
    phone,
    `Hola FEINCA, quisiera consultar disponibilidad y cotización de: ${productName}`,
  );
}
