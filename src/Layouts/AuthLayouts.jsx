import React from "react";

const AuthLayouts = (props) => {
  const { children, title, desc } = props;
  return (
    <>
      <div className="container flex justify-center">
        <div className="w-full md:w-2/5 px-2 py-3 bg-background rounded-lg shadow-xl drop-shadow-lg">
          <div class=" px-4">
            <div class="max-w-xl mx-auto text-center">
              <h2 class="font-semibold text-headline text-3xl mb-2 md:mb-4 sm:text-4xl lg:text-2xl">
                {title}
              </h2>
              <p class="font-medium text-medium text-paragraph md:text-lg">
                {desc}
              </p>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
