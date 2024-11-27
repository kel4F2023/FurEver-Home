import '../globals.css';


export default function CareLogs() {
  return (
    <div className="p-8">
      <h1 className="H1 pb-4">Care Logs</h1>
      <div className="separator"></div>
      
      {/* HStack */}
      <div className="flex flex-row justify-start items-start gap-6 py-4">
        {/* VStack 1 */}
        <div className="flex flex-col items-center space-y-2">
          <p className="H2">Daily Log</p>
          <p className="H3">Nov 10, 2024</p>
          <img src="/Lucas.png" alt="Lucas" className="w-32 h-32 object-cover rounded-full" />
          <p className="H2">Lucas</p>
        </div>

        {/* VStack 2 */}
        <div className="flex flex-col space-y-2 py-2">
          <label htmlFor="food" className="Body-Caption">Food (cups)</label>
          <input type="number" id="foodInput" name="foodInput" className="Input" placeholder="0"/>

          <label htmlFor="exerciseInput" className="Body-Caption">Exercise (min)</label>
          <input type="number" id="exerciseInput" name="exerciseInput" className="Input" placeholder="0"/>

          <label htmlFor="weightInput" className="Body-Caption">Weight (kg)</label>
          <input type="number" id="weightInput" name="weightInput" className="Input" placeholder="0"/>
        </div>
      </div>
      
      <button className="Primary-Button">Record</button>

      <div className="separator my-6"></div>

    </div>
  );
} 