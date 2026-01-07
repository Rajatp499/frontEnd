import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, DollarSign } from 'lucide-react';
import HeroSection from '../../components/layout/HeroSection';
import { useLocation } from 'react-router-dom';

interface PriceData {
  id: string;
  date: string;
  price: number;
  change: number;
}


const PriceHistoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('per Piece');
  const [viewMode, setViewMode] = useState<'table' | 'graph' | 'both'>('both');
  //selected category from Rate section:
  const location = useLocation();
  useEffect(()=>{
    const {category} = location.state || {category : 'per Piece'};
    console.log(category)
    setSelectedCategory(category)
  },[])

  // Dummy price data
  const pricePerPieceRaw = [
    { id: '1', date: '2024-01-01', price: 180, },
    { id: '2', date: '2024-01-02', price: 185, },
    { id: '3', date: '2024-01-03', price: 190, },
    { id: '4', date: '2024-01-04', price: 188, },
    { id: '5', date: '2024-01-05', price: 195, },
    { id: '6', date: '2024-01-06', price: 200, },
    { id: '7', date: '2024-01-07', price: 198, },
    { id: '8', date: '2024-01-08', price: 205, },
    { id: '9', date: '2024-01-09', price: 210, },
    { id: '10', date: '2024-01-10', price: 208, },
    { id: '11', date: '2024-01-11', price: 215, },
    { id: '12', date: '2024-01-12', price: 220, },
  ];
  const pricePerCrateRaw = [
    { id: '13', date: '2024-01-01', price: 160 },
    { id: '14', date: '2024-01-02', price: 165, },
    { id: '15', date: '2024-01-03', price: 170, },
    { id: '16', date: '2024-01-04', price: 168 },
    { id: '17', date: '2024-01-05', price: 175, },
    { id: '18', date: '2024-01-06', price: 180, },
    { id: '19', date: '2024-01-07', price: 178, },
    { id: '20', date: '2024-01-08', price: 185, },
    { id: '21', date: '2024-01-09', price: 190, },
    { id: '22', date: '2024-01-10', price: 188, },
    { id: '23', date: '2024-01-11', price: 195, },
    { id: '24', date: '2024-01-12', price: 200, },
  ]
  const priceLargeEggRaw = [
    { id: '14', date: '2024-01-01', price: 165 },
    { id: '15', date: '2024-01-02', price: 170 },
    { id: '16', date: '2024-01-03', price: 168 },
    { id: '17', date: '2024-01-04', price: 175 },
    { id: '18', date: '2024-01-05', price: 180 },
    { id: '19', date: '2024-01-06', price: 178 },
    { id: '20', date: '2024-01-07', price: 185 },
    { id: '21', date: '2024-01-09', price: 190 },
  ]

  // Helper function to calculate price change
  const calculateChange = (currentPrice: number, previousPrice: number): number => {
    if (previousPrice === 0) return 0;
    return ((currentPrice - previousPrice) / previousPrice) * 100;
  };

  // Helper function to add calculated changes to price data
  const addCalculatedChanges = (data: Omit<PriceData, 'change'>[]): PriceData[] => {
    return data.map((item, index) => {
      if (index === 0) {
        return { ...item, change: 0 }; // First item has no change
      }
      const previousPrice = data[index - 1].price;
      const change = calculateChange(item.price, previousPrice);
      return { ...item, change: Number(change.toFixed(2)) };
    });
  };

  // Calculate changes automatically
  const pricePerPiece: PriceData[] = addCalculatedChanges(pricePerPieceRaw);
  const pricePerCrate: PriceData[] = addCalculatedChanges(pricePerCrateRaw);
  const priceLargeEgg: PriceData[] = addCalculatedChanges(priceLargeEggRaw);

  const categories = ['per Piece', 'per Crate', 'per Large Egg'];

  // Filter data by category
  const filteredData = (selectedCategory == 'per Piece') ? pricePerPiece : (selectedCategory == 'per Crate' ? pricePerCrate : priceLargeEgg);
  // Format data for chart
  const chartData = filteredData.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    price: item.price,
    // category: item.category
  }));

  // Calculate statistics
  const currentPrice = filteredData[filteredData.length - 1]?.price || 0;
  const previousPrice = filteredData[filteredData.length - 2]?.price || 0;
  const priceChange = currentPrice - previousPrice;
  const percentChange = previousPrice ? ((priceChange / previousPrice) * 100).toFixed(2) : '0';
  const avgPrice = (filteredData.reduce((sum, item) => sum + item.price, 0) / filteredData.length).toFixed(2);
  const maxPrice = Math.max(...filteredData.map(item => item.price));
  const minPrice = Math.min(...filteredData.map(item => item.price));

  return (
    <div className="min-h-screen bg-gray-50 mb-8">
      <HeroSection heading='Track Price' subHeading=' Track egg price trends over time' />
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-65 mt-4 ">


        {/* Controls */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-background text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('table')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${viewMode === 'table'
                    ? 'bg-primary text-white'
                    : 'bg-background text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Table
              </button>
              <button
                onClick={() => setViewMode('graph')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${viewMode === 'graph'
                    ? 'bg-primary text-white'
                    : 'bg-background text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Graph
              </button>
              <button
                onClick={() => setViewMode('both')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${viewMode === 'both'
                    ? 'bg-primary text-white'
                    : 'bg-background text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Both
              </button>
            </div>
          </div>
        </div>


        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Current Price</span>
              <DollarSign className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{currentPrice}</p>
            <div className={`flex items-center gap-1 mt-2 ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {priceChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm font-medium">{percentChange}%</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Average Price</span>
              <Calendar className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{avgPrice}</p>
            <p className="text-sm text-gray-500 mt-2">Last 6 months</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Highest Price</span>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{maxPrice}</p>
            <p className="text-sm text-gray-500 mt-2">Peak value</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 text-sm">Lowest Price</span>
              <TrendingDown className="w-5 h-5 text-red-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900">₹{minPrice}</p>
            <p className="text-sm text-gray-500 mt-2">Lowest value</p>
          </div>
          
        </div>


        {/* Graph */}
        {(viewMode === 'graph' || viewMode === 'both') && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Price Trend</h2>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="date"
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                // label={{ value: 'Date ', position: 'outside' }}
                />
                <YAxis
                  stroke="#6b7280"
                  style={{ fontSize: '12px' }}
                  label={{ value: 'Price (₹)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#2563eb"
                  strokeWidth={3}
                  dot={{ fill: '#2563eb', r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Date"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Table */}
        {(viewMode === 'table' || viewMode === 'both') && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Price Records</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Change</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredData.slice().reverse().map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${selectedCategory === 'per Piece'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                          }`}>
                          {selectedCategory}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">₹{item.price}</td>
                      <td className="px-6 py-4 text-sm">
                        {item.change !== 0 && (
                          <span className={`font-medium ${item.change > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {item.change > 0 ? '+' : ''}{item.change.toFixed(2)}%
                          </span>
                        )}
                        {item.change === 0 && <span className="text-gray-500">—</span>}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          {item.change > 0 && (
                            <>
                              <TrendingUp className="w-4 h-4 text-green-600" />
                              <span className="text-green-600 font-medium">Up</span>
                            </>
                          )}
                          {item.change < 0 && (
                            <>
                              <TrendingDown className="w-4 h-4 text-red-600" />
                              <span className="text-red-600 font-medium">Down</span>
                            </>
                          )}
                          {item.change === 0 && (
                            <span className="text-gray-500 font-medium">Stable</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceHistoryPage;