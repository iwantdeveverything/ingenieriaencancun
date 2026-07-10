export const WHATSAPP_PHONE = "529983948293";

export const PLAN_MESSAGES = {
  impulso: "Hola, me interesa el plan Impulso Digital de $3,490 MXN (instalación única)",
  crecimiento: "Hola, me interesa el plan Crecimiento Automatizado de $4,790 MXN (instalación única)",
  dominio: "Hola, me interesa el plan Dominio 360 de $5,290 MXN (instalación única)"
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
