const ButtonComponent = function (renameObj) {
  console.log(renameObj);

  return (
    <>
      <div>
        <button type="button">{renameObj.nameToShow}</button>
      </div>
    </>
  );
};

export default ButtonComponent;
