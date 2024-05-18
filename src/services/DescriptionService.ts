export class DescriptionService {
  formatDescription = (description: string) => {
    return description.replace(/ /g, "%20").replace(/\n/g, "%0A");
  };
}
