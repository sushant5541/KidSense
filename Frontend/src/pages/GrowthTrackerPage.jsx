import React, { useState, useEffect } from 'react';
import { growthAPI, childAPI } from '../services/api';
import GrowthChart from '../components/growth/GrowthChart';
import { motion } from 'framer-motion';
import { Plus, Activity, Ruler, Weight, Milestone } from 'lucide-react';

const GrowthTrackerPage = () => {
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState('');
  const [history, setHistory] = useState([]);
  const [formData, setFormData] = useState({
    ageInMonths: '',
    height: '',
    weight: '',
    milestones: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const res = await childAPI.getChildren();
        setChildren(res.data.children);
        if (res.data.children.length > 0) {
          setSelectedChild(res.data.children[0]._id);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchChildren();
  }, []);

  useEffect(() => {
    if (selectedChild) {
      const fetchHistory = async () => {
        try {
          const res = await growthAPI.getHistory(selectedChild);
          setHistory(res.data.records);
        } catch (err) {
          console.error(err);
        }
      };
      fetchHistory();
    }
  }, [selectedChild]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const milestonesArr = formData.milestones.split(',').map(m => m.trim()).filter(m => m);
      await growthAPI.addRecord({
        childId: selectedChild,
        ...formData,
        milestones: milestonesArr
      });
      // Refresh history
      const res = await growthAPI.getHistory(selectedChild);
      setHistory(res.data.records);
      setFormData({ ageInMonths: '', height: '', weight: '', milestones: '' });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-black text-gray-800">Growth Tracker</h1>
        <select 
          className="p-3 border rounded-xl bg-white shadow-sm font-medium"
          value={selectedChild}
          onChange={(e) => setSelectedChild(e.target.value)}
        >
          {children.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Form */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Plus className="text-blue-500" /> Log New Data
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Age (Months)</label>
                <input
                  type="number"
                  required
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                  value={formData.ageInMonths}
                  onChange={(e) => setFormData({ ...formData, ageInMonths: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Milestones (comma separated)</label>
                <textarea
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 h-24"
                  placeholder="e.g. Walking, Saying 'Mama'"
                  value={formData.milestones}
                  onChange={(e) => setFormData({ ...formData, milestones: e.target.value })}
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                Save Record
              </button>
            </form>
          </div>
        </div>

        {/* Dashboard & Charts */}
        <div className="lg:col-span-2 space-y-8">
          {history.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Ruler className="text-blue-500" /> Height Progress
                  </h3>
                  <GrowthChart data={history} type="height" />
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Weight className="text-green-500" /> Weight Progress
                  </h3>
                  <GrowthChart data={history} type="weight" />
                </div>
              </div>

              {/* AI Insights Card */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-8 h-8" />
                    <h2 className="text-2xl font-bold">AI Growth Insights</h2>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                    <p className="text-lg mb-4">{history[history.length - 1].aiInsights.feedback}</p>
                    <div className="flex flex-wrap gap-2">
                      {history[history.length - 1].aiInsights.recommendations.map((rec, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          • {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              </div>

              {/* Milestones Timeline */}
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Milestone className="text-purple-500" /> Milestones Reached
                </h3>
                <div className="space-y-4">
                  {history.filter(h => h.milestones.length > 0).map((h, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="text-sm font-bold text-gray-400 w-20">{h.ageInMonths} mo</div>
                      <div className="flex flex-wrap gap-2">
                        {h.milestones.map((m, j) => (
                          <span key={j} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-sm font-semibold border border-purple-100">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-dashed border-gray-300 text-center">
              <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-400">No growth data yet</h3>
              <p className="text-gray-400">Start logging your child's growth to see insights and charts.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GrowthTrackerPage;
