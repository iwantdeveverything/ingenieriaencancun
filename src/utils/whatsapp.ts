export const WHATSAPP_PHONE = "529983948293";

export const PLAN_MESSAGES = {
  impulso: "Hola, me interesa el plan Impulso Digital de $2490 MXN/mes",
  crecimiento: "Hola, me interesa el plan Crecimiento Automático de $3790 MXN/mes",
  dominio: "Hola, me interesa el plan Dominio 360 de $5790 MXN/mes"
} as const;

export type PlanKey = keyof typeof PLAN_MESSAGES;

export function getWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedText}`;
}

export function getPlanWhatsAppUrl(plan: PlanKey): string {
  const message = PLAN_MESSAGES[plan];
  return getWhatsAppUrl(message);
}
