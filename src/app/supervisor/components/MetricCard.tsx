interface MetricItemProps {
    label: string;
    value: number;
    color?: string;
    
  }
  
  interface MetricCardProps {
    children: React.ReactNode;  // Add this line
    className?: string;
  }
  
  function MetricItem({ label, value, color = "text-orange-500" }: MetricItemProps) {
    return (
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600">{label}</span>
        <span className={`font-semibold ${color}`}>{value}</span>
      </div>
    );
  }
  
  interface MetricCardProps {
    title: string;
    totalCount: number;
    metrics: Array<{ label: string; value: number }>;
  }
  
  export default function MetricCard({ title, totalCount, metrics }: MetricCardProps) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-600">{title}</h3>
          <div className="bg-amber-50 rounded-full p-2">
            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
        </div>
        <div className="mb-4">
          <span className="text-3xl font-bold">{totalCount}</span>
        </div>
        <div className="space-y-2 border-t pt-4">
          {metrics.map((metric, index) => (
            <MetricItem 
              key={index}
              label={metric.label}
              value={metric.value}
            />
          ))}
        </div>
      </div>
    );
  }