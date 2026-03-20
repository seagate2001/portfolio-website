export const useDownload = () => {
  const downloadFile = (fileName: string, downloadName: string = 'CV_Naam.pdf') => {
    const link = document.createElement('a');
    link.href = `/${fileName}`;
    link.setAttribute('download', downloadName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openFile = (fileName: string) => {
    window.open(`/${fileName}`, '_blank');
  };

  return {
    downloadFile,
    openFile
  };
};