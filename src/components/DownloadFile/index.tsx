function DownloadFile({ file }: any) {
  const handleDownload = () => {
    const downloadUrl = URL.createObjectURL(file);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = file.name;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(downloadUrl);
  };

  return (
    <div>
      <button onClick={handleDownload}>Baixar Boletim</button>
    </div>
  );
}

export default DownloadFile;
