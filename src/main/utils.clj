(ns utils
  (:require 
   [clojure.data.csv]
   [clojure.java.io]))

(defmacro read-csv
  [f]
  (vec (clojure.data.csv/read-csv (slurp f))))