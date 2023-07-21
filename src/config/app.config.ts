interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Chef', 'Waiter', 'Owner'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['notifications', 'file upload', 'chat', 'file'],
};
