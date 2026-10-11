import React from 'react';
import { BarChart3, TrendingUp, Smartphone, Monitor, ShieldAlert } from 'lucide-react';

export default function SamplePerformanceView() {
  const metrics = [
    {
      title: 'Consultation CTA Engagement',
      value: '18.4%',
      benchmark: 'SAMPLE DATA : Synthetic Benchmark',
      delta: '+6.2% vs Generic Templates',
      icon: TrendingUp
    },
    {
      title: 'Simulated Journey Starts',
      value: '42.8%',
      benchmark: 'SAMPLE DATA : Prototype Tracking',
      delta: '+14% Completion Retention',
      icon: BarChart3
    },
    {
      title: 'Procedure Monograph Time on Page',
      value: '4m 12s',
      benchmark: 'SAMPLE DATA : High-Trust Reading Depth',
      delta: '2.8x Average Healthcare Portal',
      icon: Monitor
    },
    {
      title: 'Mobile Decision Experience',
      value: '68%',
      benchmark: 'SAMPLE DATA : Mobile Interaction Share',
      delta: 'Zero Horizontal Layout Friction',
      icon: Smartphone
    }
  ];

  return (
    <div style={{ backgroundColor: '#FAF8F4', border: '1px solid var(--color-hairline)', padding: '2.5rem', borderRadius: '2px', marginTop: '3rem' }}>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem', paddingBottom: '1.25rem', borderBottom: '1px solid var(--color-hairline)' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--color-taupe)' }}>
            CRESTIVA ANALYTICS ARCHITECTURE
          </span>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', margin: '4px 0 0 0' }}>
            Sample Practice Performance Preview
          </h4>
        </div>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '4px 10px', background: 'rgba(193, 167, 135, 0.15)', border: '1px solid rgba(193, 167, 135, 0.35)', borderRadius: '2px' }}>
          <ShieldAlert size={14} color="var(--color-taupe)" />
          <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--color-charcoal)', textTransform: 'uppercase' }}>
            ALL FIGURES BELOW ARE SYNTHETIC SAMPLE DATA
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '1.75rem' }}>
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div 
              key={idx}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--color-hairline)',
                padding: '1.5rem',
                borderRadius: '2px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-taupe)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {m.title}
                </span>
                <Icon size={16} color="var(--color-champagne)" />
              </div>

              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 600, color: 'var(--color-charcoal)', lineHeight: 1.1, marginBottom: '0.5rem' }}>
                {m.value}
              </div>

              <div style={{ fontSize: '0.75rem', color: '#1E5E4B', fontWeight: 600, marginBottom: '0.25rem' }}>
                {m.delta}
              </div>

              <div style={{ fontSize: '0.6875rem', color: 'var(--color-taupe)', fontStyle: 'italic' }}>
                {m.benchmark}
              </div>
            </div>
          );
        })}
      </div>

      <p style={{ fontSize: '0.75rem', color: 'var(--color-taupe)', margin: 0, lineHeight: 1.5 }}>
        * Note for Sales Demo: These sample metrics illustrate how Crestiva instruments custom telemetry events across procedure views, slider interactions, and consultation wizard milestones to evaluate patient decision momentum.
      </p>

    </div>
  );
}
