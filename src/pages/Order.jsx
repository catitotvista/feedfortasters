import React from 'react';
import { Input } from '../components/forms/Input.jsx';
import { Textarea } from '../components/forms/Textarea.jsx';
import { Select } from '../components/forms/Select.jsx';
import { Checkbox } from '../components/forms/Checkbox.jsx';
import { Switch } from '../components/forms/Switch.jsx';
import { Button } from '../components/core/Button.jsx';
import { Card } from '../components/core/Card.jsx';
import { SectionHeading } from '../components/core/SectionHeading.jsx';
import { Monogram } from '../components/brand/Monogram.jsx';
import { Dialog } from '../components/feedback/Dialog.jsx';
import { useToast } from '../context/ToastContext.jsx';

export default function Order() {
  const notify = useToast();
  const [open, setOpen] = React.useState(false);
  const [vela, setVela] = React.useState(true);
  const [wa, setWa] = React.useState(true);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: 'var(--space-16) var(--gutter-inline)', display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,.85fr)', gap: 'var(--space-12)', alignItems: 'start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <SectionHeading eyebrow="Encargar" title="Cuéntanos la idea" script="entre más detalles, mejor" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <Input label="¿Para quién es el cake?" placeholder="Su nombre" hint="Lo escribimos tal cual" />
          <Input label="¿Qué día lo necesitas?" placeholder="14 de febrero" />
          <Select label="Ocasión" options={['Cumpleaños', 'Boda', 'Baby shower', 'Aniversario', 'Solo porque sí']} />
          <Select label="Tamaño" options={['Cuarto de libra', 'Media libra', 'Una libra', 'Dos pisos']} />
        </div>
        <Textarea label="Cuéntanos la idea" rows={5} placeholder="Colores, la persona, el chiste interno, esa foto que viste…" hint="Puedes mandarnos referencias por WhatsApp después" />
        <Checkbox label="Con vela de número" description="Sin costo adicional" checked={vela} onChange={() => setVela(!vela)} />
        <Switch label="Avísame por WhatsApp cuando esté el boceto" checked={wa} onChange={() => setWa(!wa)} />
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <Button size="lg" onClick={() => setOpen(true)}>Mandar la idea</Button>
          <Button size="lg" variant="ghost">Guardar borrador</Button>
        </div>
      </div>
      <Card tone="crimson" padding="var(--space-8)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <Monogram size={44} ground="none" style={{ filter: 'brightness(0) invert(1)' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: 'var(--text-h2)', color: 'var(--ff-parchment-100)' }}>Qué pasa después</h3>
          <ol style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--ff-parchment-100)', opacity: .9 }}>
            <li>Te escribimos el mismo día por WhatsApp.</li>
            <li>Mandamos un boceto y el precio final.</li>
            <li>Ajustamos hasta que sea ella.</li>
            <li>Horneamos tres días antes.</li>
          </ol>
        </div>
      </Card>
      <Dialog open={open} title="¿Lo mandamos así?" script="ya casi es tuyo" onClose={() => setOpen(false)}
        footer={<><Button variant="ghost" onClick={() => setOpen(false)}>Volver</Button><Button onClick={() => { setOpen(false); notify('Listo. Te escribimos por WhatsApp hoy mismo.'); }}>Sí, mandar</Button></>}>
        Media libra de Raspberry Velvet para el 14 de febrero, con vela de número.
      </Dialog>
    </div>
  );
}
