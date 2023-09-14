

const CourseSeclection = () => {
    return (
      <div className="card w-80 bg-white rounded-xl p-6">
        <h2
          className="text-lg font-bold border-b-2
           pb-4 text-primary"
        >
          Credit Hour Remaining <span>7</span> hr
        </h2>

        <div>
          <h2
            className="text-xl font-bold
               pt-4 pb-5"
          >
            Course Name
          </h2>

          <ol className="list-decimal list-inside text-base">
            <li className="pb-2">Introduction to c programming</li>
            <li className="pb-2">Introduction to c programming</li>
            <li className="pb-2">Introduction to c programming</li>
            <li className="pb-2">Introduction to c programming</li>
          </ol>

          <h4 className="font-medium border-t-2 py-4 mt-4">
            Total Credit Hour : <span>13</span>
          </h4>
          <h3 className="font-semibold border-t-2 py-4">
            Total Price : <span>48000</span> USD
          </h3>
        </div>
      </div>
    );
};

export default CourseSeclection;