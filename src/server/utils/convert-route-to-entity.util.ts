const mapping: Record<string, string> = {
  'business-applications': 'business_application',
  'landscape-analyses': 'landscape_analysis',
  'log-analyses': 'log_analysis',
  organizations: 'organization',
  'security-analyses': 'security_analysis',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
