import { describe, it, expect } from 'vitest';
import { getWhatsAppUrl, getPlanWhatsAppUrl } from '../utils/whatsapp';

describe('WhatsApp Link Utility', () => {
  it('should generate a correct WhatsApp link with encoded message text', () => {
    const text = 'Hola, me interesa saber más';
    const expected = 'https://wa.me/529983948293?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s';
    expect(getWhatsAppUrl(text)).toBe(expected);
  });

  it('should generate plan-specific WhatsApp links correctly', () => {
    const impulsoUrl = getPlanWhatsAppUrl('impulso');
    expect(impulsoUrl).toBe('https://wa.me/529983948293?text=Hola%2C%20me%20interesa%20el%20plan%20Impulso%20Digital%20de%20%243%2C490%20MXN%20(instalaci%C3%B3n%20%C3%BAnica)');

    const crecimientoUrl = getPlanWhatsAppUrl('crecimiento');
    expect(crecimientoUrl).toBe('https://wa.me/529983948293?text=Hola%2C%20me%20interesa%20el%20plan%20Crecimiento%20Automatizado%20de%20%244%2C790%20MXN%20(instalaci%C3%B3n%20%C3%BAnica)');

    const dominioUrl = getPlanWhatsAppUrl('dominio');
    expect(dominioUrl).toBe('https://wa.me/529983948293?text=Hola%2C%20me%20interesa%20el%20plan%20Dominio%20360%20de%20%245%2C290%20MXN%20(instalaci%C3%B3n%20%C3%BAnica)');
  });
});
