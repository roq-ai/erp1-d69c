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
  customerRoles: [],
  tenantRoles: ['Owner', 'Team Member', 'Analyst', 'Security Officer'],
  tenantName: 'Organization',
  applicationName: 'ERP1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
