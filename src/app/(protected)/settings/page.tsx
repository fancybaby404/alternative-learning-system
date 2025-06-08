'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { useAuthStoreState } from '@/store/auth-store';
import { useAccessibilityStore, FontSize, FONT_SIZE_LABELS } from '@/store/accessibility-store';
import { useState } from 'react';
import { Sun, Moon, RotateCcw, Type } from 'lucide-react';

export default function SettingsPage() {
  const { user } = useAuthStoreState();
  const { fontSize, theme, setFontSize, setTheme, resetToDefaults } = useAccessibilityStore();
  const [systemMaintenance, setSystemMaintenance] = useState(false);
  const [debugMode, setDebugMode] = useState(false);

  const isMasterAdmin = user?.role === 'master_admin';
  const isRegularAdmin = user?.role === 'admin';

  const handleFontSizeChange = (value: string) => {
    setFontSize(value as FontSize);
  };

  const handleThemeToggle = (checked: boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const handleSystemMaintenanceChange = (checked: boolean) => {
    setSystemMaintenance(checked);
    // Here you would typically make an API call to update the system maintenance state
  };

  const handleDebugModeChange = (checked: boolean) => {
    setDebugMode(checked);
    // Here you would typically make an API call to update the debug mode state
  };

  const handleResetSettings = () => {
    resetToDefaults();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SETTINGS</h1>
      </div>

      <Tabs defaultValue="accessibility" className="space-y-6">
        <TabsList className="bg-white dark:bg-slate-800 border-4 border-blue-600 dark:border-blue-500">
          <TabsTrigger value="accessibility" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Accessibility
          </TabsTrigger>
          <TabsTrigger value="general" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            General
          </TabsTrigger>
          {isMasterAdmin && (
            <TabsTrigger value="admin" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Admin Settings
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="accessibility">
          <Card className="bg-white dark:bg-slate-800 border-4 border-blue-600 dark:border-blue-500">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                <Type className="h-5 w-5" />
                Accessibility Settings
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Customize your interface for better accessibility and comfort
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Font Size Control */}
              <div className="space-y-3">
                <Label htmlFor="font-size" className="text-base font-semibold text-gray-900 dark:text-white">
                  Font Size
                </Label>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Adjust text size for better readability
                  </div>
                  <Select value={fontSize} onValueChange={handleFontSizeChange}>
                    <SelectTrigger className="w-48 border-2 border-blue-600 dark:border-blue-500 bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-slate-800 border-2 border-blue-600 dark:border-blue-500">
                      <SelectItem value="normal" className="text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        {FONT_SIZE_LABELS.normal}
                      </SelectItem>
                      <SelectItem value="large" className="text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        {FONT_SIZE_LABELS.large}
                      </SelectItem>
                      <SelectItem value="extra-large" className="text-gray-900 dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        {FONT_SIZE_LABELS['extra-large']}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Theme Control */}
              <div className="space-y-3">
                <Label htmlFor="theme-toggle" className="text-base font-semibold text-gray-900 dark:text-white">
                  Theme
                </Label>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === 'light' ? (
                      <Sun className="h-5 w-5 text-yellow-500" />
                    ) : (
                      <Moon className="h-5 w-5 text-blue-400" />
                    )}
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Switch between light and dark interface themes
                      </div>
                    </div>
                  </div>
                  <Switch
                    id="theme-toggle"
                    checked={theme === 'dark'}
                    onCheckedChange={handleThemeToggle}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                <Button
                  onClick={handleResetSettings}
                  variant="outline"
                  className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700 hover:border-blue-600 dark:hover:border-blue-500"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Reset to Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="general">
          <Card className="bg-white dark:bg-slate-800 border-4 border-blue-600 dark:border-blue-500">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">General Settings</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Manage your general preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Additional general settings will be available in future updates.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {isMasterAdmin && (
          <TabsContent value="admin">
            <Card className="bg-white dark:bg-slate-800 border-4 border-blue-600 dark:border-blue-500">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Admin Settings</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Master admin exclusive settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="system-maintenance" className="text-gray-900 dark:text-white">
                      System Maintenance Mode
                    </Label>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Enable maintenance mode to restrict access to the system
                    </p>
                  </div>
                  <Switch
                    id="system-maintenance"
                    checked={systemMaintenance}
                    onCheckedChange={handleSystemMaintenanceChange}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="debug-mode" className="text-gray-900 dark:text-white">
                      Debug Mode
                    </Label>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Enable debug mode for detailed system logs and diagnostics
                    </p>
                  </div>
                  <Switch
                    id="debug-mode"
                    checked={debugMode}
                    onCheckedChange={handleDebugModeChange}
                    className="data-[state=checked]:bg-blue-600"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
