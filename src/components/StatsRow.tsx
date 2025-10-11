import React from 'react';
import Container from './Container';
import { FaStar, FaUserFriends, FaAward, FaUsers } from 'react-icons/fa';

const stats = [
  {
    icon: FaStar,
    value: '4.9/5',
    label: 'Rating',
  },
  {
    icon: FaUserFriends,
    value: '500+',
    label: 'Happy Clients',
  },
  {
    icon: FaAward,
    value: 'Premium',
    label: 'Products',
  },
  {
    icon: FaUsers,
    value: 'On-site',
    label: 'Team Available',
  },
];

export default function StatsRow() {
  return (
    <section className="py-12 bg-white border-y border-blush">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="text-gold text-3xl" />
              </div>
              <div className="text-2xl font-bold text-charcoal mb-1">{stat.value}</div>
              <div className="text-sm text-charcoal/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

