import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import {CanvasJSChart} from 'canvasjs-react-charts'


const Profile = () => {
    const [user, setUser] = useState(null)
    const location = useLocation()
    useEffect(() => {
        const userId = location.pathname.split('/')[1]
        const fetchData = async () => {
            const res = await axios.get(`/profile/${userId}`)
            const userData = await res.data
            setUser(userData)
        }
        fetchData()

    },[])

    const options = {
        animationEnabled: true,
        // exportEnabled: true,
        data: [
          {
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            indexLabelPlacement: "inside",
            dataPoints: [
              { y: user?.india, label: "India" },
              { y: user?.omen, label: "Omen" },
              { y: user?.us, label: "Us" },
            ],
          },
        ],
      };
      const options1 = {
        data: [
          {
            type: "column",
            indexLabel: "{y}",
            dataPoints: [
              { y: user?.india, label: "India" },
              { y: user?.omen, label: "Omen" },
              { y: user?.us, label: "Us" },
            ],
          },
        ],
      };

    return (
        <div>
      <p className="text-center">Welcome {user?.name}</p>
      <div className="graphs">
        <CanvasJSChart options={options1} />
        <CanvasJSChart options={options} />
      </div>

      <div className="growth-loss">
        <h1 className="p-4">Growth {user?.growth}%</h1>
        <h1 className="p-4"> Loss {user?.loss}%</h1>
      </div>
    </div>
    )
}

export default Profile
