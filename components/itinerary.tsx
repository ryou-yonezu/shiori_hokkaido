'use client'

import React from 'react'
import { ChevronRight, MapPin, Camera, Coffee, Utensils, Hotel, Car } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const MotionCard = motion(Card)

export function Itinerary() {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-100">
      {/* Cover Page */}
      <MotionCard 
        className="mb-8 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-64">
          <img
            src="/shiori_hokkaido/img/top_hokkaido.jpg"
            alt="Hokkaido Landscape"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-4xl font-bold">北海道旅行</h1>
            <p className="text-xl">2024年9月16日 - 9月19日</p>
          </div>
        </div>
      </MotionCard>

      {/* Day 1 */}
      <MotionCard 
        className="mb-8 hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">9月16日 (土) - 到着日</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Car className="mr-2" />
              <span>7:50 成田空港発</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>9:35 新千歳空港着</span>
            </div>
            <div className="flex items-center">
              <Coffee className="mr-2" />
              <span>11:00 父合流</span>
            </div>
            <div className="flex items-center">
              <Camera className="mr-2" />
              <span>終日共に行動</span>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <img src="/shiori_hokkaido/img/shin_chitose.webp" alt="New Chitose Airport" className="rounded-lg" />
              <img src="/shiori_hokkaido/img/iihininaru.jpg" alt="New Chitose Airport" className="rounded-lg" />

            </motion.div>
          </div>
        </CardContent>
      </MotionCard>

      {/* Day 2 */}
      <MotionCard 
        className="mb-8 hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">9月17日 (日) - 競馬と小樽</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Camera className="mr-2" />
              <span>～17:00 競馬関連 in 日高町</span>
            </div>
            <div className="flex items-center">
              <Car className="mr-2" />
              <span>17:00 ホテルに向けて出発 to 小樽方面</span>
            </div>
            <div className="flex items-center">
              <Hotel className="mr-2" />
              <span>20:00 ホテルソニア小樽 到着</span>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <img src="/shiori_hokkaido/img/select_sale.jpg" alt="New Chitose Airport" className="rounded-lg" />
              <img src="/shiori_hokkaido/img/otaru_yoru.jpg" alt="New Chitose Airport" className="rounded-lg" />

            </motion.div>
          </div>
        </CardContent>
      </MotionCard>

      {/* Day 3 */}
      <MotionCard 
        className="mb-8 hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">9月18日 (月) - 小樽探索</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Camera className="mr-2" />
              <span>12:00 小樽市内観光</span>
            </div>
            <div className="flex items-center">
              <Coffee className="mr-2" />
              <span>12:45 青の洞窟 シーカヤック</span>
            </div>
            <div className="flex items-center">
              <Camera className="mr-2" />
              <span>～17:00 未定</span>
            </div>
            <div className="flex items-center">
              <Hotel className="mr-2" />
              <span>17:00 ホテルソニア小樽 到着</span>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <img src="/shiori_hokkaido/img/aono_doukutsu.jpg" alt="New Chitose Airport" className="rounded-lg" />
              <img src="/shiori_hokkaido/img/kaisendon.jpg" alt="New Chitose Airport" className="rounded-lg" />

            </motion.div>
          </div>
        </CardContent>
      </MotionCard>

      {/* Day 4 */}
      <MotionCard 
        className="mb-8 hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">9月19日 (火) - 最終日</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center">
              <Coffee className="mr-2" />
              <span>9:30 石狩にて乗馬体験</span>
            </div>
            <div className="flex items-center">
              <Camera className="mr-2" />
              <span>～17:00 FreeTime</span>
            </div>
            <div className="flex items-center">
              <Car className="mr-2" />
              <span>17:00 レンタカー返却</span>
            </div>
            <div className="flex items-center">
              <ChevronRight className="mr-2" />
              <span>18:55 新千歳空港発</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>20:30 成田空港着</span>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <img src="/shiori_hokkaido/img/jyouba.jpg" alt="Horseback Riding in Ishikari" className="rounded-lg" />
              <img src="/shiori_hokkaido/img/yakei.jpg" alt="New Chitose Airport" className="rounded-lg" />
            </motion.div>
          </div>
        </CardContent>
      </MotionCard>

      {/* Map */}
      <MotionCard 
        className="mb-8 hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <CardHeader>
          <CardTitle className="text-2xl font-bold">旅程マップ</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.img 
            src="/shiori_hokkaido/img/root.png" 
            alt="Hokkaido Trip Map" 
            className="w-full rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
        </CardContent>
      </MotionCard>
    </div>
  )
}