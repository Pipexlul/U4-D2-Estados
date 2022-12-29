import React from "react";

const StatusDisplay = ({ hasTriedLogin, errors }) => {
  const hasErrors = errors.length > 0;

  const colors = {
    error: "bg-red-100 border-red-400 text-red-700",
    success: "bg-green-100 border-green-400 text-green-700",
  };

  return (
    hasTriedLogin && (
      <div
        className={`${
          hasErrors ? colors.error : colors.success
        } p-4 my-4 rounded`}
      >
        {hasErrors ? (
          <>
            <p className="font-bold">Se detectaron errores!</p>
            <ul>
              {errors.map((error, index) => {
                return (
                  <li key={index}>
                    {error.name} - {error.message}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <p className="font-bold">Login Satisfactorio!</p>
        )}
      </div>
    )
  );
};

export default StatusDisplay;
