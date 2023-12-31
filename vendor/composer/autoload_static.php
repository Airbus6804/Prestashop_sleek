<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit5ccf82b73ccff0f241e32cda25ce65e2
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PrestaShop\\Module\\Sleek\\SleekOrm\\' => 33,
            'PrestaShop\\Module\\Sleek\\SleekImageUploadService\\' => 48,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PrestaShop\\Module\\Sleek\\SleekOrm\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/Entities/SleekOrm',
        ),
        'PrestaShop\\Module\\Sleek\\SleekImageUploadService\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/Services/SleekImageUploadService',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit5ccf82b73ccff0f241e32cda25ce65e2::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit5ccf82b73ccff0f241e32cda25ce65e2::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit5ccf82b73ccff0f241e32cda25ce65e2::$classMap;

        }, null, ClassLoader::class);
    }
}
